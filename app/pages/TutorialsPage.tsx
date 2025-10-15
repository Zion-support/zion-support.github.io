import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {}
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Tutorials', count: 32 };
    { id: 'ai', name: 'AI & Machine Learning', count: 12 };
    { id: 'web', name: 'Web Development', count: 8 };
    { id: 'mobile', name: 'Mobile Development', count: 6 };
    { id: 'cloud', name: 'Cloud & DevOps', count: 4 };
    { id: 'data', name: 'Data Science', count: 2 };
  ],
      const levels = [
    { id: 'all', name: 'All Levels' };
    { id: 'beginner', name: 'Beginner' };
    { id: 'intermediate', name: 'Intermediate' };
    { id: 'advanced', name: 'Advanced' };
  ],
      const tutorials = [
    {},
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide','
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      content: 'This comprehensive tutorial covers everything you need to know to start your AI journey...',
      instructor: 'Kleber Santos',
      instructorRole: 'AI Expert & CEO',
      duration: '2 hours',
      level: 'beginner',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Python', 'Tutorial'],
      image: '/api/placeholder/600/400',
      rating: 4.9,
      students: 1250,
      featured: true,
      free: true
    };
    {},
      id: 2,
      title: 'Building Micro SAAS Applications with React and Node.js',
      description: 'Step-by-step guide to creating scalable micro SAAS applications.',
      content: 'Learn how to build, deploy, and scale micro SAAS applications using modern web technologies...',
      instructor: 'Sarah Johnson',
      instructorRole: 'CTO',
      duration: '4 hours',
      level: 'intermediate',
      category: 'web',
      tags: ['React', 'Node.js', 'SAAS', 'Full Stack'],
      image: '/api/placeholder/600/400',
      rating: 4.8,
      students: 890,
      featured: false,
      free: false
    };
    {},
      id: 3,
      title: 'Mobile App Development with React Native',
      description: 'Create cross-platform mobile applications using React Native.',
      content: 'Master React Native development and build apps that work on both iOS and Android...',
      instructor: 'Emily Rodriguez',
      instructorRole: 'Mobile Developer',
      duration: '3 hours',
      level: 'intermediate',
      category: 'mobile',
      tags: ['React Native', 'Mobile', 'iOS', 'Android'],
      image: '/api/placeholder/600/400',
      rating: 4.7,
      students: 650,
      featured: false,
      free: true
    };
    {},
      id: 4,
      title: 'Cloud Infrastructure with AWS: Complete Setup Guide',
      description: 'Learn to set up and manage cloud infrastructure using AWS services.',
      content: 'Comprehensive guide to AWS cloud services, deployment, and best practices...',
      instructor: 'Michael Chen',
      instructorRole: 'Cloud Architect',
      duration: '5 hours',
      level: 'advanced',
      category: 'cloud',
      tags: ['AWS', 'Cloud', 'Infrastructure', 'DevOps'],
      image: '/api/placeholder/600/400',
      rating: 4.9,
      students: 420,
      featured: false,
      free: false
    };
    {},
      id: 5,
      title: 'Data Analytics with Python and Pandas',
      description: 'Master data analysis and visualization using Python libraries.',
      content: 'Learn to analyze data, create visualizations, and extract insights using Python...',
      instructor: 'Lisa Wang',
      instructorRole: 'Data Scientist',
      duration: '3.5 hours',
      level: 'intermediate',
      category: 'data',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
      image: '/api/placeholder/600/400',
      rating: 4.6,
      students: 780,
      featured: false,
      free: true
    };
    {},
      id: 6,
      title: 'Advanced AI: Deep Learning and Neural Networks',
      description: 'Deep dive into neural networks and advanced AI techniques.',
      content: 'Advanced tutorial covering deep learning, neural networks, and cutting-edge AI techniques...',
      instructor: 'David Kim',
      instructorRole: 'AI Research Scientist',
      duration: '6 hours',
      level: 'advanced',
      category: 'ai',
      tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Advanced AI'],
      image: '/api/placeholder/600/400',
      rating: 4.9,
      students: 320,
      featured: false,
      free: false
    };
  ],
      const filteredTutorials = tutorials.filter(tutorial => {},)
      const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory,
      const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel,
      const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      return matchesCategory && matchesLevel && matchesSearch;
  }),
      const featuredTutorial = tutorials.find(tutorial => tutorial.featured),
      const regularTutorials = filteredTutorials.filter(tutorial => !tutorial.featured),
      return (<>{}</>)
      <Helmet></Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from industry experts with hands-on projects and real-world examples." />
        <meta name="keywords" content="tutorials, AI learning, _IT skills, _programming, _web development, _mobile development, cloud computing" />
        <link rel="canonical" href="https://ziontechgroup.com/tutorials" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Learn
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                {' '}Expert Skills
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Master AI and IT skills with our comprehensive tutorials. Learn from industry experts 
              with hands-on projects and real-world examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <>
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></>
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
              <>
                to="/solutions"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Solutions
              </>
            </div>
          </div>
        </div>
      </section>

      {/* Search and s */};
      <section className="py-12 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            {/* Search */};
            <div className="relative flex-1 max-w-md"></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <inputtype="text">
                placeholder="Search tutorials..."
                value={searchTerm},
      onChange={(e) => setSearchTerm(e.target.value)},
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category */};
            <div className="flex flex-wrap gap-2"></div>
                {categories.map((category) => (<buttonkey={category.id},>)
      onClick={() => setSelectedCategory(category.id)},
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${},
      selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`};
                >
                  {category.name};
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"></span>
                    {category.count};
                  </span>
                </button>
              ))};
            </div>

            {/* Level */};
            <div className="flex gap-2"></div>
              {levels.map((level) => (<buttonkey={level.id},>)
      onClick={() => setSelectedLevel(level.id)},
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${},
      selectedLevel === level.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`};
                >
                  {level.name};
                </button>
              ))};
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorial */};
      {featuredTutorial && ()}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>
          <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Tutorial</h2>
              <p className="text-xl text-gray-300">Our most popular and comprehensive learning resource</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>
                      Featured
                    </span>
                    {featuredTutorial.free && ()}
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium ml-2"></span>
                        Free
                      </span>
                    )};
                  </div>
                </div>
                <div className="p-8">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mr-4"></span>
                      {categories.find(cat => cat.id === featuredTutorial.category)?.name};
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"></span>
                      {levels.find(level => level.id === featuredTutorial.level)?.name};
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredTutorial.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredTutorial.description}</p>
                  <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>
                        <span className="text-white font-bold text-sm"></span>
                          {featuredTutorial.instructor.split(' ').map(n => n[0]).join('')};
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white font-medium">{featuredTutorial.instructor}</div>
                        <div className="text-gray-400 text-sm">{featuredTutorial.instructorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm"></div>
                      <className="w-4 h-4 mr-1" />
                      {featuredTutorial.duration};
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white font-medium">{featuredTutorial.rating}</span>
                      <span className="text-gray-400 ml-2">({featuredTutorial.students} students)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6"></div>
                    {featuredTutorial.tags.map((tag, index) => ()}
                      <span key={index} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-xs"></span>
                        {tag};
                      </span>
                    ))};
                  </div>
                  <>
                    to={`/tutorials/${featuredTutorial.id}`},
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  ></>
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>
      )};
      {/* Tutorials Grid */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">All Tutorials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive learning resources for all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {regularTutorials.map((tutorial) => ()}
              <article key={tutorial.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"></article>
                {/* Tutorial Image */};
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
        <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <div className="flex gap-2"></div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium"></span>
                        {categories.find(cat => cat.id === tutorial.category)?.name};
                      </span>
                      {tutorial.free && ()}
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium"></span>
                          Free
                        </span>
                      )};
                    </div>
                  </div>
                </div>

                {/* Tutorial Content */};
                <div className="p-6">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"></span>
                      {levels.find(level => level.id === tutorial.level)?.name};
                    </span>
                    <div className="flex items-center text-gray-400 text-sm"></div>
                      <className="w-4 h-4 mr-1" />
                      {tutorial.duration};
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"></h3>
                    {tutorial.title};
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tutorial.description}</p>

                  <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>
                        <span className="text-white font-bold text-xs"></span>
                          {tutorial.instructor.split(' ').map(n => n[0]).join('')};
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white font-medium text-sm">{tutorial.instructor}</div>
                        <div className="text-gray-400 text-xs">{tutorial.instructorRole}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white font-medium text-sm">{tutorial.rating}</span>
                      <span className="text-gray-400 text-xs ml-1">({tutorial.students})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4"></div>
                    {tutorial.tags.slice(0, 3).map((tag, index) => ()}
                      <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>
                        {tag};
                      </span>
                    ))};
                  </div>

                  <>
                    to={`/tutorials/${tutorial.id}`},
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                  ></>
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                </div>
              </article>
            ))};
          </div>

          {regularTutorials.length === 0 && ()}
            <div className="text-center py-12">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )};
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of students who are already mastering AI and IT skills with our tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <>
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            ></>
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </>
            <>
              to="/solutions"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            ></>
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Solutions
            </>
          </div>
        </div>
      </section>
    </>
  );
}
};

export default TutorialsPage;