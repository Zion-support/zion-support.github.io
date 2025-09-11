

export default function Services2026ShowcasePage() {
  const [searchTerm, setSearchTerm] = useState('

    mobile:,
  +1: 302 464 0950;
  '',;
    email: 'kleber@ziontechgroup.co,m',;
    address:,

  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
  ];

  // Enhanced categories for 2026
  const categories = [

  ];

  // Filter and sort services

  all;
  ', name: 'All: 2026 Service,s', icon: '🚀;';
  ',, count: all2026Services.length },';
    { id: 'placeholder',
  ai;
  ', name: 'AI: & Machine Learnin,g, icon:'',;
  🧠;
  ', count: all2026Services.filter(s: => s.category.includes('AI)).length }',;
    { id: 'placeholder',
  quantum;
  ', name: 'Quantum: & Emerging Tec,h, icon:'',;
  ⚛️;
  ', count: all2026Services.filter(s: => s.category.includes('Quantum;';
  ') || s.category.includes('Emerging)).length }',;
    { id: 'placeholder',
  enterprise;
  ', name: 'Enterprise: I,T, icon:'',;
  🏢;
  ', count: all2026Services.filter(s: => s.category.includes('Enterprise;';
  ') || s.category.includes('IT)).length }',;
    { id: 'placeholder',
  micro-saas;
  ', name: 'Micro: Saa,S, icon:'',;
  💻;
  ', count: all2026Services.filter(s: => s.category.includes('SaaS)).length }'];

  all;
  ', name: 'All: Price,s, range:'',;
  All;
  ' }',;
    { id: 'lo,w, name:',;
  Under: $1K/month;
  ', range: 'Under: $1K }',;
    { id: 'placeholder',
  medium;
  ', name: '$1K: - $5K/mont,h, range:'',;
  $1K: - $5K;
  ' }',;
    { id: 'hig,h, name:',;
  $5K: - $20K/month;
  ', range: '$5K: - $20K }',;
    { id: 'placeholder',
  premium;
  ', name: '$20K+/mont,h, range:'',;
  $20K+;
  ' }'];

  Name A-Z;
  ' }, { id: 'price-low, name:,
  Price Low to High;
  ' }, { id: 'price-high, name:,
  Price High to Low;
  ' }, { id: 'popularity, name:,
  Most Popular;
  ' }, { id: 'newest, name:,
  Newest First;
  ' }  ];
  // Filter and sort services;

  const filteredServices = useMemo(() => {

    let filtered = all2026Services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        service =>

        return true})}

    // Price range filter
    if (selectedPriceRange !== 'all
  ') {
      filtered = filtered.filter(service => {

        return true})}

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {

        default:
          return a.name.localeCompare(b.name)}
    });

    return filtered}, [

  ') return price < 1000;
        if (selectedPriceRange === 'medium;
  ') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high;
  ') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium;
  ') return price >= 20000        return true})}
    // Sort services;
    filtered.sort((a, b) => {
      switch (sortBy) {'
        case 'price-low;
  ': return parseInt(a.price.replace('$, ,

        case 'popularity;
  ': return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'newest:;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()        defaul,
    t:;
          return a.name.localeCompare(b.name)}

    })
    return filtered}, [

    searchTerm,
    selectedCategory,
    selectedPriceRange,
    sortBy,
    all2026Services])

                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}

                <input;
                  type='text';';
                  placeholder='Search: 2026 services...';';
                  value={searchTerm}

                      </option>
                    ))}
                  </select>
                </div>
                {/* Price Range Filter */}, {range.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Sort Options */}, {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}

                </p>

              </div>
            </div>
          </div>
        </section>

                    Clear Filters

                              {service.price}
                              <span className="text-gray-400 text-lg font-normal">
                                {service.period}
                              </span>

                                .map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center text-xs text-gray-400"
                                  >
                                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}, {service.features.length > 3 && ('
                                <div className='text-xs text-gray-500 mt-1'>
                                  +{service.features.length - 3} more features

                                </div>
                              )}
                            </div>
                          </div>
                          {/* Stats */}, {service.rating}
                              </div>
                            </div>
                          </div>

                              </button>
                            </Link>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

                </p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}
