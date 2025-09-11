
import { motion, AnimatePresence } from 'framer-motion';

              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <MapPin className='w-5 h-5' />;
                <span className='text-sm font-semibold'>;
                  {contactInfo && contactInfo.address}
                </span>              </motion && motion.div>;
            </div>;



            {/* CTA Buttons */}

=======            </div>
            {/* CTA Buttons */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Get Started Today
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======


                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                View All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;



      {/* Search and Filters */}

=======
      {/* Search and Filters */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'              />;
            </div>;



            {/* Filters */}

=======            </div>
            {/* Filters */}

=======
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ))}
                </select>
              </div>
              {/* Price Range Filter */}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}                </select>;
              </div>;


              {/* Price Range Filter */}


                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                </select>;
              </div>;

                  ))}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
=======                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </select>;              </div>;
=======

                </select>;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Results Count */}
              <div className='flex items-end'>;
                <div className='text-gray-300'>;
                  <span className='text-sm'>Showing </span>;
                  <span className='font-semibold text-cyan-400'>;
                    {filteredServices && filteredServices.length}
                  </span>;
                  <span className='text-sm'> of </span>;
                  <span className='font-semibold text-purple-400'>;
                    {allServices && allServices.length}
                  </span>;
                  <span className='text-sm'> services</span>                </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
                          )}

                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2'>                          {service && service.tagline}
                        </p>;                        {/* Price */}
                        <div className='flex items-baseline gap-2 mb-4'>;
                          <span className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </span>;
                          <span className='text-gray-400'>;
                            {service && service.period}
                          </span>;
                        </div>;
                        {/* Description */}
                        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>                          {service && service.description}
                        </p>;
                        {/* Features */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{service.reviews}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                        {/* Category Badge */}
                        <div className='mb-4'>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}
                          >                            {service.category}
                          </span>
                        </div>
                        {/* Action Buttons */}
                        <div className='flex gap-2'>
                          <a
                            href={service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
                          >
                            <ArrowRight className='w-4 h-4 mr-1' />                        {/* Category Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                        {/* Action Buttons */}

                        {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex gap-2">
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />


                            Learn More
                          </Link>
                ))}
=======

=======

                ))}
=======


=======                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
=======
            ) : (;
              <motion&& motion.div
=======              </div>;
            ) : (;
              <motion&& motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            </div>;
                            <div className='text - xs text - gray - 400'>Reviews</div>                          </div>;
                        </div>;
                        {/* Category Badge */}
                        <div className='mb - 4'>;
                          <span;
                            className={`inline - block px - 3 py - 1 rounded - full text - xs font - semibold ${service.color} text - white`}
                          >                            {service.category}
                          </span>;
                        </div>;
                        {/* Action Buttons */}
                        <div className='flex gap - 2'>;
                          <a;
                            href={service.link}
                            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm py - 2 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <ArrowRight className='w - 4 h - 4 mr - 1' />;
                            Learn More;
                          </a>;
                          <a;
                            href='/contact';
                            className='px - 4 py - 2 border border - gray - 600 text - gray - 200 hover:bg - gray - 700 hover:border - gray - 500 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <MessageSquare className='w - 4 h - 4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>) : (
              <motion.div;


      {/* Contact CTA Section */}
      <section className='py-16 px-4'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>


                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>


            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;=======
              Join the future of technology with our revolutionary 2027;
              services. Each solution is designed to deliver measurable ROI and;
              competitive advantage.;
            </p>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </div>
            </div>

                Start Your Transformation
                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;

=======


                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                Explore All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </UltraQuantumHolographicBackground>;
  );


=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
);
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex - wrap items - center justify - center gap - 6 mb - 8'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Start Your Transformation;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                Explore All Services;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </UltraQuantumHolographicBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
