import {

  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  Play,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
  Zap,
  Brain,
  Cloud,
  Shield,
  Cpu,
  Network,
  BarChart3,
  Code,
  Database,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Settings,
  Palette,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
  Microscope,
  Rocket,
  Code,
  Network,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Eye,
  Star as StarIcon} from 'lucide-react';
const Training: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  
  
  
  
  
      case 'intermediate':'
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':'
        return 'bg-orange-500/20 text-orange-400';
      case 'expert':'
        return 'bg-red-500/20 text-red-400';
      default:'
        return 'bg-gray-500/20 text-gray-400'}
  ];

  
      case 'in-person':'
        return 'bg-purple-500/20 text-purple-400';
      case 'hybrid':'
        return 'bg-indigo-500/20 text-indigo-400';
      case 'self-paced':'
        return 'bg-teal-500/20 text-teal-400';
      default:'
        return 'bg-gray-500/20 text-gray-400'}
  };

  
    
    
    
    return matchesSearch && matchesCategory && matchesLevel && matchesFormat}) ;
  // Update counts
  categories.forEach(cat => {

    if (cat.id === 'all') {

      cat.count = trainingPrograms.length} else {

      cat.count = trainingPrograms.filter()
        program => program.category === cat.id
      ).length}
  ];
  levels.forEach(level => {

    if (level.id === 'all') {

      level.count = trainingPrograms.length} else {

      level.count = trainingPrograms.filter()
        program => program.level === level.id
      ).length}
  }) ;
  formats.forEach(format => {

    if (format.id === 'all') {

      format.count = trainingPrograms.length} else {
      format.count = trainingPrograms.filter()
        program => program.format === format.id
      ).length}
    
    return courses};

  return()
    <>
      <SEO title="Training & Education - Zion Tech Group"
        description="Comprehensive training programs and educational resources in AI, cloud computing, cybersecurity, data analytics, and emerging technologies."
        keywords="training, education, courses, AI training, cloud computing, cybersecurity, data analytics, Zion Tech Group"
       />
"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}"
        <section className="pt-32 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >"
              <div className="flex items-center justify-center space-x-3 mb-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">"
                  <GraduationCap className="w-8 h-8 text-white"  />                </div>
              </div>"
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Training & Education
              </h1>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive training programs and educational resources in AI,
                cloud computing, cybersecurity, data analytics, and emerging
                technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}"
        <section className="py-8 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              {/* Search Bar */}"
              <div className="relative mb-6">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
                <input"

                  type="text""                  placeholder="Search training programs..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}"
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}"
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>"
                  <h3 className="text-white font-semibold mb-3">Categories</h3>"
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${

                          activeCategory === category.id'
                            ? 'bg-blue-500 text-white''
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'`
                        }`}
                      >
                        {category.name}"
                        <span className="text-xs opacity-75 ml-1">
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div>"
                  <h3 className="text-white font-semibold mb-3">Level</h3>"
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}`
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${

                          activeLevel === level.id'
                            ? 'bg-blue-500 text-white''
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'`
                        }`}
                      >
                        {level.name}"
                        <span className="text-xs opacity-75 ml-1">
                          ({level.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format Filter */}
                <div>"
                  <h3 className="text-white font-semibold mb-3">Format</h3>"
                  <div className="flex flex-wrap gap-2">
                    {formats.map(format => (
                      <button
                        key={format.id}
                        onClick={() => setActiveFormat(format.id)}`
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${

                          activeFormat === format.id'
                            ? 'bg-blue-500 text-white''
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'`
                        }`}
                      >
                        {format.name}"
                        <span className="text-xs opacity-75 ml-1">
                          ({format.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Training Programs Grid */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Program Header */}"
                  <div className="flex items-start justify-between mb-4">"
                    <div className="flex items-center gap-3">"
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">"
                        <BookOpen className="w-6 h-6 text-white"  />                      </div>
                      <div>"
                        <h3 className="text-white font-semibold text-lg">
                          {program.title}
                        </h3>"
                        <p className="text-gray-400 text-sm">
                          {program.instructor}
                        </p>
                      </div>
                    </div>"
                    <div className="text-right">"
                      <div className="text-2xl font-bold text-white">
                        {program.price}
                      </div>"
                      <div className="text-gray-400 text-sm">
                        {program.duration}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                  {/* Description */}"
                  <p className="text-gray-300 text-sm mb-4">
                    {program.description}
                  </p>

                  {/* Tags and Badges */}"
                  <div className="flex items-center gap-2 mb-4">
                    <span`
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}
                    >
                      {program.level.charAt(0).toUpperCase() +
                        program.level.slice(1)}
                    </span>
                    <span`
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getFormatColor(program.format)}`}
                    >
                      {program.format'
                        .replace('-',)
                        .charAt(0)
                        .toUpperCase() +'
                        program.format.replace('-',).slice(1)}
                    </span>
                  </div>

                  {/* Stats */}"
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">"
                    <div className="flex items-center gap-1">"
                      <Star className="w-4 h-4 text-yellow-400 fill-current"  />
                      <span>{program.rating}</span>
                    </div>"
                    <div className="flex items-center gap-1">"
                      <Users className="w-4 h-4"  />
                      <span>{program.students.toLocaleString()} students</span>
                    </div>"
                    <div className="flex items-center gap-1">"
                      <Clock className="w-4 h-4"  />                      <span>{program.duration}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                  {/* Tags */}"
                  <div className="flex flex-wrap gap-1 mb-4">
                    {program.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}"
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>) ) }
                  </div>

                  {/* Features */}"
                  <div className="mb-4">"
                    <h4 className="text-white font-medium text-sm mb-2">
                      What you'll learn:
                    </h4>"
                    <ul className="space-y-1">
                      {program.features.slice(0, 2).map((feature, idx) => (
                        <li
                          key={idx}"
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >"
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"  />
                          {feature}
                        </li>) ) }
                    </ul>
                  </div>
                  {workshop.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4"  />
                      <span>{workshop.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4"  />
                    <span>Capacity: {workshop.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-4 h-4"  />
                    <span>Instructor: {workshop.instructor}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{workshop.price}</div>
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                  {/* Action Buttons */}"
                  <div className="flex gap-2">"
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">"
                      <Play className="w-4 h-4"  />
                      Enroll Now
                    </button>"
                    <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors">"
                      <Download className="w-4 h-4"  />                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {filteredPrograms.length === 0 && ("
              <div className="text-center py-12">"
                <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4"  />"
                <h3 className="text-white text-xl font-semibold mb-2">
                  No training programs found
                </h3>"
                <p className="text-gray-400">
                  Try adjusting your search criteria or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Advance Your Career?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have accelerated their careers with our comprehensive training programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/training/programs"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};
export default Training;
'"`