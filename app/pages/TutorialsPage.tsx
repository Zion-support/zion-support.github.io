
import React from 'react''
import { Helmet  } from 'react-helmet-async''
import { Link  } from 'react-router-dom''
import {
  AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  ClockIcon,;
  UserGroupIcon,;
  ArrowRightIcon;
} from '@heroicons/react/24/outline'""
const TutorialsPage: React.FC = () => {
  const tutorials  = ["
""
      id: 1,"""
      title: 'Getting Started with AI Solutions','"'"""""
      description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.','"'"""""
      duration: '2 hours','"'"""""
      level: 'Beginner','"'"""""
      category: 'AI Solutions','"'"""""
      href: '/tutorials/ai-fundamentals'"""
""
      id: 2,"""
      title: 'Cybersecurity Best Practices','"'"""""
      description: 'Essential cybersecurity practices to protect your business from threats and vulnerabilities.','"'"""""
      duration: '3 hours','"'"""""
      level: 'Intermediate','"'"""""
      category: 'Cybersecurity','"'"""""
      href: '/tutorials/cybersecurity-basics'"""
""
      id: 3,"""
      title: 'Cloud Infrastructure Setup','"'"""""
      description: 'Step-by-step guide to setting up and managing cloud infrastructure for your business.','"'"""""
      duration: '4 hours','"'"""""
      level: 'Advanced','"'"""""
      category: 'Cloud Computing','"'"""""
      href: '/tutorials/cloud-setup'"""
""
      id: 4,"""
      title: '5G Technology Implementation','"'"""""
      description: 'Understanding and implementing 5G technology solutions for modern businesses.','"'"""""
      duration: '2.5 hours','"'"""""
      level: 'Intermediate','"'"""""
      category: '5G Solutions','"'"""""
      href: '/tutorials/5g-implementation'""

  ];
  return null;
}
    <></>"
      <Helmet></Helmet>""
        <title>Tutorials - Zion Tech Group</title>"""
        <meta name ="description" content="Comprehensive tutorials and guides for AI, cybersecurity, cloud computing, and digital transformation technologies." />"""""
        <meta name ="keywords" content="tutorials, AI learning, cybersecurity training, cloud computing guides, 5G technology" />""""
      </Helmet>"""
      <div className ="min-h-screen bg-slate-900 text-white">""""
        {/* Hero Section */}"""
        <section className ="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"""""
          <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"""""
            <div className ="text-center">"""""
              <h1 className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">"""
                Tutorials & Learning""
              </h1>"""
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
                Master cutting-edge technologies with our comprehensive tutorials and guides designed for all skill levels.
              </p>
            </div>
          </div>"
        </section>""
        {/* Tutorials Grid */}"""
        <section className ="py-20">"""""
          <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"""""
            <div className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""""
              {tutorials.map((tutorial) => ("""
                <div key ={tutorial.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group">"""""
                  <div className ="flex items-center justify-between mb-4">"""""
                    <span className ="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">"""
                      {tutorial.category}""
                    </span>"""
                    <span className ="text-sm text-gray-400">{tutorial.level}</span>""""
                  </div>"""
                  <h3 className ="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">"""
                    {tutorial.title}""
                  </h3>"""
                  <p className ="text-gray-300 mb-4 leading-relaxed">"""
                    {tutorial.description}""
                  </p>"""
                  <div className ="flex items-center justify-between">"""""
                    <div className ="flex items-center text-gray-400 text-sm">"""""
                      <ClockIcon className="w-4 h-4 mr-1" />""
                      {tutorial.duration}"
                    </div>""
                    <Link to ={tutorial.href}>"""
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:gap-2 transition-all"""
                      Start Tutorial"""
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />""
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>"
        </section>""
        {/* CTA Section */}"""
        <section className ="py-20 bg-slate-800">"""""
          <div className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"""""
            <h2 className ="text-4xl font-bold mb-6">Ready to Start Learning?</h2>"""""
            <p className ="text-xl text-gray-300 mb-8">"""
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.""
            </p>"""
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">"""""
              <Link to ="/contact"">"""
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300""
                Get Started Today""
              </Link>"""
              <Link to ="/demo"">"""
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                Watch Demo
              </Link>
            </div>
          </div>"
        </section>""
const TutorialsPage: React.FC = () => {}"""
  const [selectedCategory, setSelectedCategory] = useState('all')"""""
  const [selectedLevel, setSelectedLevel] = useState('all')"""""
  const [searchTerm, setSearchTerm] = useState('')""""
  const  categories = ["""
    { id= 'all', name: 'All Tutorials', count: 32 }"""""
    { id= 'ai', name: 'AI & Machine Learning', count: 12 }"""""
    { id= 'web', name: 'Web Development', count: 8 }"""""
    { id= 'mobile', name: 'Mobile Development', count: 6 }"""""
    { id= 'cloud', name: 'Cloud & DevOps', count: 4 }"""""
    { id= 'data', name: 'Data Science', count: 2 }"""
  ],""
      const  levels = ["""
    { id= 'all', name: 'All Levels' }"""""
    { id= 'beginner', name: 'Beginner' }"""""
    { id= 'intermediate', name: 'Intermediate' }"""""
    { id= 'advanced', name: 'Advanced' }""
  ],"
      const  tutorials = [""
      id= 1,"""
      title: 'Getting Started with AI: A Complete Beginner\'s Guide','"""""
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',"""""
      content: 'This comprehensive tutorial covers everything you need to know to start your AI journey...',"""""
      instructor: 'Kleber Santos',"""""
      instructorRole: 'AI Expert & CEO',"""""
      duration: '2 hours',"""""
      level: 'beginner',"""""
      category: 'ai',"""""
      tags: ['AI', 'Machine Learning', 'Python', 'Tutorial'],"""""
      image: '/api/placeholder/600/400',""
      rating: 4.9,
      students: 1250,
      featured= true,
      free: true

      rating: 4.8,
      students: 890,
      featured= false,
      free: false;
rating: 4.7,
      students: 650,
      featured= false,
      free: true;
rating: 4.9,
      students: 420,
      featured= false,
      free: false;
rating: 4.6,
      students: 780,
      featured= false,
      free: true;
rating: 4.9,
      students: 320,
      featured= false,
      free: false;
tutorial.description.toLowerCase().includes(searchTerm.toLowerCase() ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase(),
      return matchesCategory && matchesLevel && matchesSearch
  }),
      return (<>{}</>)"
      <Helmet></Helmet>""
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>"""
        <meta name ="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from industry experts with hands-on projects and real-world examples." />"""""
        <meta name ="keywords" content="tutorials, AI learning, _IT skills, _programming, _web development, _mobile development, cloud computing" />"""""
        <link rel ="canonical" href="https://ziontechgroup.com/tutorials" />""
      </Helmet>
"
        </div>""
      </div>"""
          <div  className ="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>"""
        </div>""
"""
        <div  className ="container mx-auto px-4 relative z-10">"""""
        <div  className ="container mx-auto px-4 relative z-10">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>"""
        </div>""
      </div>"""
            <h1  className ="text-5xl md=text-7xl font-bold text-white mb-6 leading-tight"></h1>""""
              Learn"""
              <span  className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"""""
                {' '}Expert Skills"""
              </span>""
            </h1>"""
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>""
              Master AI and IT skills with our comprehensive tutorials. Learn from industry experts;"
with hands-on projects and real-world examples.""
            </p>"""
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"""""
                to="/contact""""""
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center""""
              ></>""
                Start Learning"""
                <ArrowRight className ="w-5 h-5 ml-2" />""""
              </>"""
                to="/solutions""""""
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"""""
              ></>"""
                <BookOpen className ="w-5 h-5 mr-2" />""
                Explore Solutions
              </>
            </div>
          </div>
        </div>
      </section>"
""
      {/* Search and s */}"""
      <section className ="py-12 bg-slate-800"></section>"""""
        <div  className ="container mx-auto px-4">"""""
        <div  className ="container mx-auto px-4">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>"
      </div>""
            {/* Search */}"""
            <div  className ="relative flex-1 max-w-md"></div>"""""
              <Search className ="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"""""
              <inputtype="text">"""""
                placeholder="Search tutorials...""""
                value={searchTerm},""
      onChange={(e) => setSearchTerm(e.target.value)},"""
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""""
      </div>""
            {/* Search */}"""
            <div className ="relative flex-1 max-w-md"></div>"""""
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"""""
              <inputtype="text">"""""
                placeholder="Search tutorials..."""
                value={searchTerm},""
      onChange={(e) => setSearchTerm(e.target.value)},"""
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>"
""
            {/* Category */}"""
            <div  className ="flex flex-wrap gap-2"></div>""
                {categories.map((category) => (<buttonkey={category.id},>)
      onClick={() => setSelectedCategory(category.id)},
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${},"
      selectedCategory === category.id""
                  {category.name}"""
                  <span  className ="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"></span>""
                    {category.count}
                  </span>
                </button>
              )}
            </div>"
""
            {/* Level */}"""
            <div  className ="flex gap-2"></div>""
              {levels.map((level) => (<buttonkey={level.id},>)
      onClick={() => setSelectedLevel(level.id)},"
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${},""
      selectedLevel === level.id"""
                      ? 'bg-purple-600 text-white'": 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'""
                  }`};
                  {level.name}
                </button>
              )}
            </div>
          </div>
                      Featured"
                    </span>""
                    {featuredTutorial.free && ()}"""
                      <span  className ="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium ml-2"></span>""
                        Free
                      </span>
                    )}"
                  </div>""
                </div>"""
                <div  className ="p-8">"""""
        <div  className ="p-8">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>"""
        </div>""
      </div>"""
                    <span  className ="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mr-4"></span>"""
                      {categories.find(cat => cat.id === featuredTutorial.category)?.name}""
                    </span>"""
                    <span  className ="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"></span>""
                      {levels.find(level => level.id === featuredTutorial.level)?.name}"
                    </span>""
                  </div>"""
                  <h3  className ="text-2xl font-bold text-white mb-4">{featuredTutorial.title}</h3>"""""
                  <p  className ="text-gray-300 mb-6 leading-relaxed">{featuredTutorial.description}</p>"""""
                  <div  className ="flex items-center justify-between mb-6">"""""
        <div  className ="flex items-center justify-between mb-6">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                        </span>"
                      </div>""
                      <div></div>"""
                        <div  className ="text-white font-medium">{featuredTutorial.instructor}</div>"""""
                        <div  className ="text-gray-400 text-sm">{featuredTutorial.instructorRole}</div>"""
                      </div>""
                    </div>"""
                    <div  className ="flex items-center text-gray-400 text-sm"></div>"""""
                      <className="w-4 h-4 mr-1" />""
                      {featuredTutorial.duration}"
                    </div>""
                  </div>"""
                  <div  className ="flex items-center justify-between mb-6">"""""
        <div  className ="flex items-center justify-between mb-6">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>"
                    </div>""
                  </div>"""
                  <div  className ="flex flex-wrap gap-2 mb-6"></div>""""
                    {featuredTutorial.tags.map((tag, index) => ()}"""
                      <span  key ={index} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-xs"></span>""
                        {tag}
                      </span>
                    )}"
                  </div>""
                    to={`/tutorials/${featuredTutorial.id}`},"""
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors""
                  ></>""
                    Start Learning"""
                    <ArrowRight className="w-4 h-4 ml-2" />""
                  </>
                </div>
              </div>
            </div>"
                      </span>""
                      {tutorial.free && ()}"""
                        <span  className ="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium"></span>""
                          Free
                        </span>
                      )}
                    </div>
                  </div>
                </div>"
""
                {/* Tutorial Content */}"""
                <div  className ="p-6">"""""
        <div  className ="p-6">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>"""
        </div>""
      </div>"""
                    <span  className ="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"></span>"""
                      {levels.find(level => level.id === tutorial.level)?.name}""
                    </span>"""
                    <div  className ="flex items-center text-gray-400 text-sm"></div>"""""
                      <className="w-4 h-4 mr-1" />""
                      {tutorial.duration}
                    </div>"
                  </div>""
"""
                  <h3  className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"></h3>"""
                    {tutorial.title}""
                  </h3>"""
                  <p  className ="text-gray-300 mb-4 text-sm leading-relaxed">{tutorial.description}</p>"""""
                  <div  className ="flex items-center justify-between mb-4">"""""
        <div  className ="flex items-center justify-between mb-4">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                        </span>"
                      </div>""
                      <div></div>"""
                        <div  className ="text-white font-medium text-sm">{tutorial.instructor}</div>"""""
                        <div  className ="text-gray-400 text-xs">{tutorial.instructorRole}</div>""
                      </div>
                    </div>"
                  </div>""
"""
                  <div  className ="flex items-center justify-between mb-4">"""""
        <div  className ="flex items-center justify-between mb-4">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                    </div>"
                  </div>""
"""
                  <div  className ="flex flex-wrap gap-2 mb-4"></div>""""
                    {tutorial.tags.slice(0, 3).map((tag, index) => ()}"""
                      <span  key ={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>""
                        {tag}
                      </span>
                    )}
                  </div>

                    to={`/tutorials/${tutorial.id}`},
                  </>
                </div>
              </article>
            )}
          </div>"
""
          {regularTutorials.length === 0 && ()}"""
            <div  className ="text-center py-12">"""""
        <div  className ="text-center py-12">"""""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"""""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>"
      </div>""
              </div>"""
              <h3  className ="text-xl font-semibold text-white mb-2">No tutorials found</h3>"""""
              <p  className ="text-gray-400">Try adjusting your search or filter criteria.</p>""
            </div>
          )}
        </div>
      </section>"
""
      {/* CTA Section */}"""
      <section className ="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>"""""
        <div  className ="container mx-auto px-4 text-center"></div>"""""
          <h2  className ="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>"""""
          <p  className ="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>"""
            Join thousands of students who are already mastering AI and IT skills with our tutorials.""
          </p>"""
          <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"""""
              to="/contact"""""
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"""
            ></>"""
              <Target className="w-5 h-5 mr-2" />"""
              Get Started""
            </>"""
              to="/solutions"""""
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"""
            ></>"""
              <BookOpen className="w-5 h-5 mr-2" />""
              Explore Solutions
            </>
          </div>
        </div>
      </section>"
  )""
"""