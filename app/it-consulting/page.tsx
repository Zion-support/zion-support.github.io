









































































  Webcam as WebcamIcon, Speaker as SpeakerIcon;}




    return matchesCategory && matchesSearch;}

      {/* Search and Filter Section */}

        <div className="max-w-7xl mx-auto"></div>
          </section>
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>
          </div>
            {/* Search */}</div>
          </div>
            <div className="flex-1"></div>
          </div>
              <div className="relative"></div>
          </div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
                <input
          </Search>
                  type="text"
          </input>
                  placeholder="Search IT services..."
          </input>
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
            {/* Category Filter */}
            <div className="lg:w-64"></div>
          </input>
              <select
          </div>
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                    {category.name}
                  </option>
          </select>
                ))}
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8"></div>
          </select>
            {categories.map((category) => (</div>
          </div>
              <button;}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          </button>
                  selectedCategory === category.id
          </button>
                    ? 'bg-cyan-500 text-white'
          </button>
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400';}
                }`}
              >
          </button>
                {category.name}
              </button>
          </button>
            ))}
