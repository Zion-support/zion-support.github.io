import React from 'react';

const TutorialsPage: React.FC = () => {}
  const [selectedCategory, setSelectedCategory] = useState('all');""
  const [selectedLevel, setSelectedLevel] = useState('all');""
  const [searchTerm, setSearchTerm] = useState('');""
  const  categories = [
    { id= 'all', name: 'All Tutorials', count: 32 };""
    { id= 'ai', name: 'AI & Machine Learning', count: 12 };""
    { id= 'web', name: 'Web Development', count: 8 };""
    { id= 'mobile', name: 'Mobile Development', count: 6 };""
    { id= 'cloud', name: 'Cloud & DevOps', count: 4 };""
    { id= 'data', name: 'Data Science', count: 2 };""
  ],
      const  levels = [
    { id= 'all', name: 'All Levels' };""
    { id= 'beginner', name: 'Beginner' };""
    { id= 'intermediate', name: 'Intermediate' };""
    { id= 'advanced', name: 'Advanced' };""
  ],
      const  tutorials = [
      id= 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide','""
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',""
      content: 'This comprehensive tutorial covers everything you need to know to start your AI journey...',""
      instructor: 'Kleber Santos',""
      instructorRole: 'AI Expert & CEO',""
      duration: '2 hours',""
      level: 'beginner',""
      category: 'ai',""
      tags: ['AI', 'Machine Learning', 'Python', 'Tutorial'],""
      image: '/api/placeholder/600/400',""
      rating: 4.9,
      students: 1250,
      featured= true,
      free: true
    }
    {},


      rating: 4.8,
      students: 890,
      featured= false,
      free: false,
  rating: 4.7,
      students: 650,
      featured= false,
      free: true,
  rating: 4.9,
      students: 420,
      featured= false,
      free: false,
  rating: 4.6,
      students: 780,
      featured= false,
      free: true,
  rating: 4.9,
      students: 320,
      featured= false,
      free: false


                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      return matchesCategory && matchesLevel && matchesSearch
  }),

      return (<>{}</>)
      <Helmet></Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta: name ="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from industry experts with hands-on projects and real-world examples." />""
        <meta: name ="keywords" content="tutorials, AI learning, _IT skills, _programming, _web development, _mobile development, cloud computing" />""
        <link: rel ="canonical" href="https://ziontechgroup.com/tutorials" />""
      </Helmet>


        </div>
      </div>
          <div  className ="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>""
        </div>

        <div  className ="container mx-auto px-4 relative z-10">""
        <div  className ="container mx-auto px-4 relative z-10">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
            <h1  className ="text-5xl md=text-7xl font-bold text-white mb-6 leading-tight"></h1>""
              Learn
              <span  className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>""
                {' '}Expert Skills""
              </span>
            </h1>
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>""
              Master AI and IT skills with our comprehensive tutorials. Learn from industry experts;
with hands-on projects and real-world examples.
            </p>
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>""
                to="/contact"""
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"""
              ></>
                Start Learning
                <ArrowRight: className ="w-5 h-5 ml-2" />""
              </>
                to="/solutions"""
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"""
              ></>
                <BookOpen: className ="w-5 h-5 mr-2" />""
                Explore Solutions
              </>
            </div>
          </div>
        </div>
      </section>

      {/* Search and s */}
      <section: className ="py-12 bg-slate-800"></section>""
        <div  className ="container mx-auto px-4">""
        <div  className ="container mx-auto px-4">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>

      </div>
            {/* Search */}
            <div  className ="relative flex-1 max-w-md"></div>""
              <Search: className ="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />""
              <inputtype="text">""
                placeholder="Search tutorials..."""
                value={searchTerm},
      onChange={(e) => setSearchTerm(e.target.value)},
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              />
            </div>

            {/* Category */}
            <div  className ="flex flex-wrap gap-2"></div>""
                {categories.map((category) => (<buttonkey={category.id},>)
      onClick={() => setSelectedCategory(category.id)},
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${},
      selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'"
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'"
                  }`}
                >
                  {category.name}
                  <span  className ="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"></span>""
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Level */}
            <div  className ="flex gap-2"></div>""
              {levels.map((level) => (<buttonkey={level.id},>)
      onClick={() => setSelectedLevel(level.id)},
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${},
      selectedLevel === level.id

                  }`};

                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>


                  </>
                </div>
              </div>
            </div>


              Explore Solutions
            </>
          </div>
        </div>
      </section>

