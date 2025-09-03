import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export function ResourcesPage() {};
  return null;
}
    { id: 'all', name: 'All Resources', icon: BookOpen },;
    { id: 'whitepapers', name: 'White Papers', icon: FileText },;
    { id: 'case-studies', name: 'Case Studies', icon: Target },;
    { id: 'webinars', name: 'Webinars', icon: Video },;
    { id: 'guides', name: 'Guides', icon: BookOpen },;
    { id: 'templates', name: 'Templates', icon: FileText },;
    { id: 'research', name: 'Research', icon: Brain },;
    { id: 'tools', name: 'Tools', icon: Code }
  ];

  const resources = [;
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
}
  ];
;
  const filteredResources = resources.filter(resource => {};
});
;
  const featuredResources = filteredResources.filter(resource => resource.isFeatured);
  const regularResources = filteredResources.filter(resource => !resource.isFeatured);

  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Resources & Downloads;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Access our comprehensive library of white papers, case studies, guides, and tools ;
              to help you stay ahead of technology trends and implement best practices.;
            </p>;

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
            </div>;

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">100+</div>;
                <div className="text-sm text-zion-slate-light">Resources</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">50K+</div>;
                <div className="text-sm text-zion-slate-light">Downloads</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">4.8★</div>;
                <div className="text-sm text-zion-slate-light">Average Rating</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">Free</div>;
                <div className="text-sm text-zion-slate-light">All Resources</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Categories Filter */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap gap-4 justify-center">;
            {};
                onClick={() => setSelectedCategory(category.id)}
                className={};
}`}
              >;
                <category.icon className="w-4 h-4" />;
                <span>{category.name}</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Featured Resources */}
      {};
                <div key={resource.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                  <div className="p-6">;
                    <div className="flex items-start space-x-4 mb-4">;
                      <div className="text-4xl">{resource.image}</div>;
                      <div className="flex-1">;
                        <div className="flex items-center space-x-2 mb-2">;
                          <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                            {categories.find(c => c.id === resource.category)?.name}
                          </span>;
                          {};
                          )}
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">;
                            Featured;
                          </span>;
                        </div>;
                        <div className="flex items-center space-x-4 text-xs text-zion-slate-light">;
                          <div className="flex items-center space-x-1">;
                            <Calendar className="w-3 h-3" />;
                            <span>{new Date(resource.publishDate).toLocaleDateString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Download className="w-3 h-3" />;
                            <span>{resource.downloadCount.toLocaleString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />;
                            <span>{resource.rating}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                      {resource.title}
                    </h3>;

                    <p className="text-zion-slate-light mb-4 leading-relaxed">;
                      {resource.description}
                    </p>;

                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">;
                      <div className="flex items-center space-x-2">;
                        <User className="w-4 h-4" />;
                        <span>{resource.author}</span>;
                      </div>;
                      <div className="flex items-center space-x-4">;
                        <span>{resource.type}</span>;
                        <span>{resource.size}</span>;
                        <span>{resource.pages}</span>;
                      </div>;
                    </div>;

                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-1">;
                        {};
                          <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <div>Broken JSX</div>
                        className="bg-zion-cyan text-white px-4 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center space-x-2">;
                        <Download className="w-4 h-4" />;
                        <span>Download</span>;
                      </a>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
      )}

      {/* All Resources */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-2xl font-bold text-white">;
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>;
            <div className="flex items-center space-x-4">;
              <span className="text-zion-slate-light">;
                {regularResources.length} resources found;
              </span>;
              <button className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors">;
                <Filter className="w-4 h-4" />;
                <span>Filter</span>;
              </button>;
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={resource.id} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                <div className="p-6">;
                  <div className="flex items-start space-x-3 mb-4">;
                    <div className="text-3xl">{resource.image}</div>;
                    <div className="flex-1">;
                      <div className="flex items-center space-x-2 mb-2">;
                        <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                          {categories.find(c => c.id === resource.category)?.name}
                        </span>;
                        {};
                        )}
                      </div>;
                    </div>;
                  </div>;

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">;
                    {resource.title}
                  </h3>;

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">;
                    {resource.description}
                  </p>;

                  <div className="space-y-2 mb-4 text-xs text-zion-slate-light">;
                    <div className="flex items-center space-x-2">;
                      <User className="w-3 h-3" />;
                      <span>{resource.author}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Calendar className="w-3 h-3" />;
                      <span>{new Date(resource.publishDate).toLocaleDateString()}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Download className="w-3 h-3" />;
                      <span>{resource.downloadCount.toLocaleString()} downloads</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />;
                      <span>{resource.rating} rating</span>;
                    </div>;
                  </div>;

                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-sm text-zion-cyan">{resource.type} • {resource.size}</div>;
                    <div className="text-sm text-zion-slate-light">{resource.pages}</div>;
                  </div>;

                  <div className="flex items-center justify-between">;
                    <div className="flex flex-wrap gap-1">;
                      {};
                        <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <div>Broken JSX</div>
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                      <Download className="w-4 h-4 mr-1" />;
                      Download;
                    </a>;
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;

          {};
}}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors">;
                Clear filters;
              </button>;
            </div>;
          )}
        </div>;
      </section>;

      {/* Newsletter Signup */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Stay Updated with New Resources;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Subscribe to our newsletter and be the first to access new white papers, ;
              case studies, and tools as they're released.;
            </p>;

            <div className="max-w-md mx-auto">;
              <div className="flex space-x-2">;
                <div>Broken JSX</div>
                />;
                <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Subscribe;
                </button>;
              </div>;
              <p className="text-xs text-zion-slate-light mt-2">;
                We respect your privacy. Unsubscribe at any time.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Need Custom Resources?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Looking for specific research, analysis, or tools that aren't available? ;
            Our team can create custom resources tailored to your needs.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Request Custom Resource;
            </Link>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Explore Our Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}

export default ResourcesPage;