return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">""""
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.8 }}""""
          className="text-center text-white mb-16""""
        >""""
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Team"""
          </h1>""""
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Be part of a team that's shaping the future of technology. Work on;
            cutting-edge AI, quantum computing, and cybersecurity solutions that;
            transform businesses worldwide.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.8, delay: 0.2 }}""""
          className="max-w-6xl mx-auto mb-12"""
        >"""
          {/* Search Bar */}""""
          <div className="relative mb-8">"""
            <input""""
              type="text""""
              placeholder="Search job titles, skills, or keywords..."""
              value={searchTerm}"""
              onChange={e => setSearchTerm(e.target.value)}""""
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent""""
            />""""
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />          </div>
"""
          {/* Filters */}""""
          <div className="grid md:grid-cols-2 gap-6">
            {/* Department Filter */}"""
            <div>""""
              <label className="block text-white font-medium mb-3">
                Department;
              </label>
              <select;
                value={selectedDepartment}"""
                onChange={e => setSelectedDepartment(e.target.value)}""""
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"""
              >
                {departments.map(dept => (
                  <option;
                    key={dept.id}"""
                    value={dept.id}""""
                    className="bg-gray-800 text-white"""
                  >
                    {dept.name} ({dept.count}) </option>) ) }
              </select>
            </div>

            {/* Location Filter */}"""
            <div>""""
              <label className="block text-white font-medium mb-3">
                Location;
              </label>
              <select;
                value={selectedLocation}"""
                onChange={e => setSelectedLocation(e.target.value)}""""
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"""
              >
                {locationFilters.map(loc => (
                  <option;
                    key={loc.id}"""
                    value={loc.id}""""
                    className="bg-gray-800 text-white"""
                  >
                    {loc.name} ({loc.count}) </option>) ) }
              </select>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.8, delay: 0.4 }}""""
          className="max-w-6xl mx-auto space-y-6"""
        >"""
          {filteredJobs.length === 0 ? (""""
            <div className="text-center py-16">""""
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4"  />""""
              <h3 className="text-xl font-semibold text-white mb-2">
                No jobs found"""
              </h3>""""
              <p className="text-gray-400">
                Try adjusting your search terms or filters.
              </p>            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div;
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}""""
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300""""
              >""""
                <div className="p-6">"""
                  {/* Job Header */}""""
                  <div className="flex items-start justify-between mb-4">""""
                    <div className="flex items-start space-x-4">
                      <div;
                        className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}"""
                      >""""
                        <job.icon className="w-8 h-8 text-white" />"""
                      </div>""""
                      <div className="flex-1">""""
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.title}"""
                        </h3>""""
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">""""
                          <div className="flex items-center space-x-1">""""
                            <Briefcase className="w-4 h-4"  />
                            <span>{job.department}</span>"""
                          </div>""""
                          <div className="flex items-center space-x-1">""""
                            <MapPin className="w-4 h-4"  />
                            <span>{job.location}</span>"""
                          </div>""""
                          <div className="flex items-center space-x-1">""""
                            <Clock className="w-4 h-4"  />
                            <span>{job.type}</span>"""
                          </div>""""
                          <div className="flex items-center space-x-1">""""
                            <DollarSign className="w-4 h-4"  />                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button"""
                      onClick={() => toggleJob(job.id)}""""
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"""
                    >"""
                      {expandedJob === job.id ? (""""
                        <ChevronUp className="w-6 h-6"  />"""
                      ) : (""""
                        <ChevronDown className="w-6 h-6"  />                      )}
                    </button>
                  </div>
"""
                  {/* Job Description */}""""
                  <p className="text-gray-300 mb-4">{job.description}</p>

                  {/* Expandable Content */}
                  {expandedJob === job.id && (
                    <motion.div;
                      initial={{ height: 0, opacity: 0 }}'
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}"""
                      transition={{ duration: 0.3 }}""""
                      className="border-t border-white/20 pt-4 space-y-6"""
                    >
                      {/* Requirements */}"""
                      <div>""""
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">""""
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2"  />                          Requirements"""
                        </h4>""""
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li"""
                              key={idx}""""
                              className="flex items-start space-x-2 text-gray-300""""
                            >""""
                              <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0"  />                              <span>{req}</span>
                            </li>) ) }
                        </ul>
                      </div>

                      {/* Benefits */}"""
                      <div>""""
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">""""
                          <Heart className="w-5 h-5 text-cyan-400 mr-2"  />                          Benefits"""
                        </h4>""""
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li"""
                              key={idx}""""
                              className="flex items-start space-x-2 text-gray-300""""
                            >""""
                              <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0"  />                              <span>{benefit}</span>
                            </li>) ) }
                        </ul>
                      </div>
"""
                      {/* Apply Button */}""""
                      <div className="pt-4">""""
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                          Apply for this Position;
                        </button>
                      </div>
                    </motion.div>) }
                </div>"""
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>"""
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Why Work With Us */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.8, delay: 0.6 }}""""
          className="mt-20""""
        >""""
          <div className="text-center mb-12">""""
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Work With Zion Tech Group?"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">'
              Join a team that's passionate about innovation and making a real;
              impact in the world of technology.
            </p>
          </motion.div>
          """
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtZion.map((item, index) => (
              <motion.div;
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"""
              >"""
                <div className="text-4xl mb-4">{item.image}</div>"""
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>"""
                <p className="text-slate-300 text-sm mb-3">{item.description}</p>"""
                <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </div>"""
""""
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">""""
            <div className="text-center">""""
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Lightbulb className="w-8 h-8 text-white"  />"""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-2">
                Innovation First"""
              </h3>""""
              <p className="text-gray-300">
                Work on cutting-edge technologies that are shaping the future of;
                business and society.
              </p>"""
            </div>""""
            <div className="text-center">""""
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Globe className="w-8 h-8 text-white"  />"""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-2">
                Global Impact"""
              </h3>""""
              <p className="text-gray-300">
                Your work will help businesses worldwide transform their;
                operations and achieve their goals.
              </p>"""
            </div>""""
            <div className="text-center">""""
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Rocket className="w-8 h-8 text-white"  />"""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-2">
                Career Growth"""
              </h3>""""
              <p className="text-gray-300">
                Continuous learning opportunities and clear career progression;
                paths for ambitious professionals.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.8, delay: 0.8 }}""""
          className="mt-20 text-center""""
        >""""
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">""""
            <h2 className="text-3xl font-bold text-white mb-6">'
              Don't See the Right Role?"""
            </h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">'
              We're always looking for talented individuals to join our team.''
              Send us your resume and let's discuss how you can contribute to;
              our mission.
            </p>"""
""""
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">""""
              <div className="flex items-center justify-center space-x-3 text-gray-300">""""
                <Mail className="w-5 h-5 text-cyan-400"  />
                <span>careers@ziontechgroup.com</span>"""
              </div>""""
              <div className="flex items-center justify-center space-x-3 text-gray-300">""""
                <Phone className="w-5 h-5 text-cyan-400"  />                <span>+1 302 464 0950</span>
              </div>
            </div>"""
""""
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Send Your Resume;
            </button>
          </div>

          {/* Job Listings */}`
          <div className={`grid gap-6 ${}
'
''
'''
            viewMode === 'grid' '''`
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' ''`'`
              : 'grid-cols-1'```
          }`}>
            {filteredJobs().map((job, index) => (
              <motion.div;
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="group"""
              >
                <Link to={job.link}>`
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${}
'
                    viewMode === 'list' ? 'flex items-start space-x-4' : ''`
                  }`}>
                    {job.urgent && ("""
                      <div className="flex items-center space-x-2 mb-3">"""
                        <Zap className="w-4 h-4 text-yellow-400"  />"""
                        <span className="text-xs text-yellow-400 font-medium">Urgent Hiring</span>
                      </div>
                    )}
                    `
                    <div className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${}
'
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''`
                    }`}>"""
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    '
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>"""
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      """
                      <div className="space-y-2 mb-4">"""
                        <div className="flex items-center space-x-2 text-sm text-slate-400">"""
                          <Building className="w-4 h-4"  />
                          <span>{job.department}</span>
                        </div>"""
                        <div className="flex items-center space-x-2 text-sm text-slate-400">"""
                          <MapPin className="w-4 h-4"  />
                          <span>{job.location}</span>
                        </div>"""
                        <div className="flex items-center space-x-2 text-sm text-slate-400">"""
                          <Briefcase className="w-4 h-4"  />
                          <span>{job.type}</span>
                        </div>"""
                        <div className="flex items-center space-x-2 text-sm text-slate-400">"""
                          <Clock className="w-4 h-4"  />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      """
                      <p className="text-slate-300 text-sm mb-4">{job.description}</p>
                      """
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <span>Posted {job.posted}</span>
                        <span>{job.applications} applications</span>
                      </div>
                      """
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">"""
                        <span className="text-sm font-medium">View Details</span>"""
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform"  />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

// Missing Search component;
const Search: any = ({ className }: { className?: string }) => (<svg;
    className={className}
    fill="none"""
    stroke="currentColor"""
    viewBox="0 0 24 24"""
  >
    <path;
      strokeLinecap="round"""
      strokeLinejoin="round"""
      strokeWidth={2}
      d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z"""
    />
  </svg>) ;

// Missing ChevronDown component;
const ChevronDown: any = ({ className }: { className?: string }) => (<svg;
    className={className}
    fill="none"""
    stroke="currentColor"""
    viewBox="0 0 24 24"""
  >
    <path;
      strokeLinecap="round"""
      strokeLinejoin="round"""
      strokeWidth={2}
      d="M19 9l - 7 7 - 7-7"""
    />
  </svg>) ;

// Missing ChevronUp component;
'"`
// Missing ChevronUp component'"`'"`
'"`'"`'"`
'"`'"`'"`
'"`'"`
