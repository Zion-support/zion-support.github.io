import SEOHead from '../components/SEOHead';";

      id: 2,
      title: 'Building Micro SAAS Applications with React and Node.js',";
      description: 'Step-by-step guide to creating scalable micro SAAS applications.',";
      content: 'Learn how to build, deploy, and scale micro SAAS applications using modern web technologies...',";
      instructor: 'Sarah Johnson',";
      instructorRole: 'CTO',";
      duration: '4 hours',";
      level: 'intermediate',";
      category: 'web',";
      tags: ['React', 'Node.js', 'SAAS', 'Full Stack'],";
      image: '/api/placeholder/600/400',";
    };
    {},
      id: 3,
      title: 'Mobile App Development with React Native',";
      description: 'Create cross-platform mobile applications using React Native.',";
      content: 'Master React Native development and build apps that work on both iOS and Android...',";
      instructor: 'Emily Rodriguez',";
      instructorRole: 'Mobile Developer',";
      duration: '3 hours',";
      level: 'intermediate',";
      category: 'mobile',";
      tags: ['React Native', 'Mobile', 'iOS', 'Android'],";
      image: '/api/placeholder/600/400',";
    };
    {},
      id: 4,
      title: 'Cloud Infrastructure with AWS: Complete Setup Guide',";
      description: 'Learn to set up and manage cloud infrastructure using AWS services.',";
      content: 'Comprehensive guide to AWS cloud services, deployment, and best practices...',";
      instructor: 'Michael Chen',";
      instructorRole: 'Cloud Architect',";
      duration: '5 hours',";
      level: 'advanced',";
      category: 'cloud',";
      tags: ['AWS', 'Cloud', 'Infrastructure', 'DevOps'],";
      image: '/api/placeholder/600/400',";
    };
    {},
      id: 5,
      title: 'Data Analytics with Python and Pandas',";
      description: 'Master data analysis and visualization using Python libraries.',";
      content: 'Learn to analyze data, create visualizations, and extract insights using Python...',";
      instructor: 'Lisa Wang',";
      instructorRole: 'Data Scientist',";
      duration: '3.5 hours',";
      level: 'intermediate',";
      category: 'data',";
      tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],";
      image: '/api/placeholder/600/400',";
    };
    {},
      id: 6,
      title: 'Advanced AI: Deep Learning and Neural Networks',";
      description: 'Deep dive into neural networks and advanced AI techniques.',";
      content: 'Advanced tutorial covering deep learning, neural networks, and cutting-edge AI techniques...',";
      instructor: 'David Kim',";
      instructorRole: 'AI Research Scientist',";
      duration: '6 hours',";
      level: 'advanced',";
      category: 'ai',";
      tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Advanced AI'],";
      image: '/api/placeholder/600/400',";
    };
  ],
      const: filteredTutorials = tutorials.filter(tutorial => {},);
      const: matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory,";
      const: matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel,";
      const: matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      const: featuredTutorial = tutorials.find(tutorial => tutorial.featured),
      const: regularTutorials = filteredTutorials.filter(tutorial => !tutorial.featured),
      {/* Hero Section */};
      <section: className ="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>";
        <div: className ="absolute inset-0 overflow-hidden">";
        <div: className ="absolute inset-0 overflow-hidden">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";

const TutorialsPage: React.FC = () => {
  return (
    <>
      <SEOHead: title =" Tutorials Page - Zion Tech Group"";";
        description="Zion Tech Group  Tutorials Page service page"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4"> Tutorials Page</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";

                      ? 'bg-cyan-600 text-white'": 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'";
                  }`};
                      ? 'bg-purple-600 text-white'";
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'";
        </div>
      </section>

      {/* Featured Tutorial */}
      {featuredTutorial && ()}
        <section: className ="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>"
          <div  className ="container mx-auto px-4">"
        <div  className ="container mx-auto px-4">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              <h2  className ="text-4xl font-bold text-white mb-4">Featured Tutorial</h2>"
              <p  className ="text-xl text-gray-300">Our most popular and comprehensive learning resource</p>"
            </div>

            <div  className ="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">"
        <div  className ="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <div  className ="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
        <div  className ="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />";
                    <span: className ="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>";
                      <div: className ="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>";
                        <span: className ="text-white font-bold text-sm"></span>";
                          {featuredTutorial.instructor.split(' ').map(n => n[0]).join(')}"'"
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />";
                      <span: className ="text-white font-medium">{featuredTutorial.rating}</span>";
                      <span: className ="text-gray-400 ml-2">({featuredTutorial.students} students)</span>";
                    <ArrowRight: className ="w-4 h-4 ml-2" />";
          </div>
        </section>
      )}
      {/* Tutorials Grid */}
      <section: className ="py-20 bg-slate-800"></section>"
        <div  className ="container mx-auto px-4">"
        <div  className ="container mx-auto px-4">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">All Tutorials</h2>"
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Comprehensive learning resources for all skill levels.
            </p>
          </div>

          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {regularTutorials.map((tutorial) => ()}
              <article: key ={tutorial.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"></article>"
                {/* Tutorial Image */}
                <div  className ="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
        <div  className ="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />";
                    <div: className ="flex gap-2"></div>";
                      <span: className ="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium"></span>";
                        {categories.find(cat => cat.id === tutorial.category)?.name};
                      <div: className ="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>";
                        <span: className ="text-white font-bold text-xs"></span>";
                          {tutorial.instructor.split(' ').map(n => n[0]).join(')}"'"
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />";
                      <span: className ="text-white font-medium text-sm">{tutorial.rating}</span>";
                      <span: className ="text-gray-400 text-xs ml-1">({tutorial.students})</span>";
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm";
                  ></>
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />";
                <Search className="w-8 h-8 text-gray-400" />";
              <BookOpen: className ="w-5 h-5 mr-2" />";
    </>";
  ),";";
};";";";
export default TutorialsPage;"
