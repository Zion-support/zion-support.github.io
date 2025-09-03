import React, { useState } from 'react';
import Head from 'next/head';
;
const Tutorials: React.FC = () => {};
    { id: 'all', name: 'All Tutorials', icon: '📚' },;
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },;
    { id: 'integration', name: 'Integration', icon: '🔗' },;
    { id: 'advanced', name: 'Advanced', icon: '⚡' },;
    { id: 'best-practices', name: 'Best Practices', icon: '✅' },;
  ];

  const tutorials = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
  ];

  const filteredTutorials = tutorials.filter(tutorial => ;
    activeCategory === 'all' || tutorial.category === activeCategory;
  );

  return (;
    <>;
      <Head>;
        <title>Tutorials - Zion AI Marketplace</title>;
        <meta name="description" content="Step-by-step tutorials for AI integration and marketplace success" />;
        <meta name="keywords" content="tutorials, step-by-step, AI, integration, learning" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">;
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">;
          <div className="container mx-auto px-6 py-8">;
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
              Step-by-Step Tutorials;
            </h1>;
            <p className="text-xl text-gray-300 mt-4">;
              Master AI integration with our comprehensive, hands-on tutorials;
            </p>;
          </div>;
        </header>;

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">;
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Choose a Category</h2>;
            <div className="flex flex-wrap gap-3">;
              {};
                  onClick={() => setActiveCategory(category.id)}
                  className={};
}`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name}
                </span>;
                </button>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured Tutorials */}
        <section className="container mx-auto px-6 py-12">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Featured Tutorials</h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
              <div key={tutorial.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">;
                <div className="flex items-center justify-between mb-3">;
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">;
                    Featured;
                  </span>;
                  <span className="text-xs text-gray-400">{tutorial.duration}</span>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">;
                  {tutorial.title}
                </h3>;
                <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>;
                <div className="flex items-center justify-between mb-4">;
                  <div>Broken JSX</div>
}`}>;
                    {tutorial.difficulty}
                  </span>;
                  <span className="text-xs text-gray-400">{tutorial.steps} steps</span>;
                </div>;
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">;
                  Start Tutorial;
                </button>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* All Tutorials */}
        <main className="container mx-auto px-6 py-12">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-3xl font-bold text-blue-400">;
              {activeCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === activeCategory)?.name}
            </h2>;
            <span className="text-gray-400">;
              {filteredTutorials.length} tutorials found;
            </span>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
              <article key={tutorial.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors group">;
                <div className="flex items-center justify-between mb-3">;
                  <div>Broken JSX</div>
}`}>;
                    {tutorial.difficulty}
                  </span>;
                  <span className="text-xs text-gray-400">{tutorial.duration}</span>;
                </div>;

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer">;
                  {tutorial.title}
                </h3>;

                <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>;

                <div className="flex flex-wrap gap-2 mb-4">;
                  {};
                      #{tag}
                    </span>;
                  ))}
                </div>;

                <div className="flex items-center justify-between">;
                  <span className="text-sm text-gray-400">{tutorial.steps} steps</span>;
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-transform">;
                    Start Tutorial →;
                  </button>;
                </div>;
              </article>;
            ))}
          </div>;
        </main>;

        {/* Learning Path */}
        <section className="container mx-auto px-6 py-16">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Recommended Learning Path</h2>;
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30">;
            <div className="grid md:grid-cols-4 gap-6">;
              <div className="text-center">;
                <div className="text-4xl mb-4">1️⃣</div>;
                <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>;
                <p className="text-gray-300 text-sm">Learn the basics and set up your first project</p>;
                <div className="mt-4">;
                  <a href="#getting-started" className="text-blue-400 hover:text-blue-300 text-sm">;
                    View Tutorials →;
                  </a>;
                </div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-4">2️⃣</div>;
                <h3 className="text-lg font-semibold text-white mb-2">Integration</h3>;
                <p className="text-gray-300 text-sm">Connect AI services to your applications</p>;
                <div className="mt-4">;
                  <a href="#integration" className="text-blue-400 hover:text-blue-300 text-sm">;
                    View Tutorials →;
                  </a>;
                </div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-4">3️⃣</div>;
                <h3 className="text-lg font-semibold text-white mb-2">Best Practices</h3>;
                <p className="text-gray-300 text-sm">Learn industry best practices and security</p>;
                <div className="mt-4">;
                  <a href="#best-practices" className="text-blue-400 hover:text-blue-300 text-sm">;
                    View Tutorials →;
                  </a>;
                </div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl mb-4">4️⃣</div>;
                <h3 className="text-lg font-semibold text-white mb-2">Advanced</h3>;
                <p className="text-gray-300 text-sm">Master complex workflows and optimization</p>;
                <div className="mt-4">;
                  <a href="#advanced" className="text-blue-400 hover:text-blue-300 text-sm">;
                    View Tutorials →;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Interactive Learning */}
        <section className="container mx-auto px-6 py-16">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Interactive Learning</h2>;
          <div className="grid md:grid-cols-2 gap-8">;
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
              <div className="text-4xl mb-4">🎯</div>;
              <h3 className="text-xl font-semibold text-white mb-4">Practice Projects</h3>;
              <p className="text-gray-300 mb-4">;
                Apply what you learn with hands-on practice projects that simulate real-world scenarios.;
              </p>;
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">;
                Start Practice Project;
              </button>;
            </div>;

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
              <div className="text-4xl mb-4">🏆</div>;
              <h3 className="text-xl font-semibold text-white mb-4">Earn Certificates</h3>;
              <p className="text-gray-300 mb-4">;
                Complete tutorial series to earn certificates and showcase your AI integration skills.;
              </p>;
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">;
                View Certificates;
              </button>;
            </div>;
          </div>;
        </section>;

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">;
          <div className="container mx-auto px-6 py-8">;
            <div className="text-center text-gray-400">;
              <p>Need help with a tutorial? Our support team is here to help</p>;
              <p className="mt-2">;
                <a href="/contact" className="text-blue-400 hover:text-blue-300">;
                  Get Support →;
                </a>;
              </p>;
            </div>;
          </div>;
        </footer>;
      </div>;
    </>;
  )}
export default Tutorials;