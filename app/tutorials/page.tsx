

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tutorials = [
    {

  ];

  const categories = [
    { id: "all", name: "All Tutorials" },
    { id: "ai", name: "AI & ML" },
    { id: "cloud", name: "Cloud" },
    { id: "security", name: "Security" },
    { id: "development", name: "Development" },
  ];

  const filteredTutorials =
    selectedCategory === "all"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedCategory);

  return (
    <>

            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">

                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-6xl">
                      {tutorial.icon === Code
                        ? "💻"
                        : tutorial.icon === Database
                          ? "☁️"
                          : "🔒"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tutorial.category.toUpperCase()}
                      </span>
                      {tutorial.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{tutorial.students} students</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">

                        {tutorial.difficulty}
                      </span>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow structured learning paths to master specific technology
                domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  AI Developer Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Complete journey from AI basics to advanced machine learning
                  applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 12 tutorials</li>
                  <li>• 20 hours of content</li>
                  <li>• 5 hands-on projects</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Cloud Architect Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Master cloud infrastructure design and deployment across major
                  platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 15 tutorials</li>
                  <li>• 25 hours of content</li>
                  <li>• 8 practical labs</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Security Expert Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Learn cybersecurity fundamentals and advanced threat
                  protection techniques.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 10 tutorials</li>
                  <li>• 18 hours of content</li>
                  <li>• 6 security labs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are advancing their careers with
              our technology tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Browse All Tutorials
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Learning Paths
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
