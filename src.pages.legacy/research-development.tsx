import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export default function ResearchDevelopment() {};
  return null;
}
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
  const filteredProjects = projects.filter(project => {};
});
;
  const stats = [;
    { number: "25+", label: "Active Projects", icon: FlaskConical },;
    { number: "$15M+", label: "Research Funding", icon: DollarSign },;
    { number: "50+", label: "Research Team", icon: Users },;
    { number: "100+", label: "Publications", icon: BookOpen }
  ];

  return (;
    <div className="min-h-screen bg-gray-50">;
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Research & Development;
            </h1>;
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">;
              Pioneering the future of technology through cutting-edge research and innovative development projects.;
            </p>;
          </div>;
        </div>;
      </div>;

      {/* Stats Section */}
      <section className="py-16 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {};
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>;
                  <div className="text-sm text-gray-600">{stat.label}</div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />;
              <div>Broken JSX</div>
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
            </div>;

            {/* Area Filter */}
            <div className="flex items-center gap-2">;
              <Filter className="h-5 w-5 text-gray-400" />;
              <div>Broken JSX</div>
                onChange={(e) => setSelectedArea(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
                {};
                  <option key={area} value={area}>;
                    {area === 'all' ? 'All Research Areas' : area}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
          {};
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>;
                <project.icon className="w-16 h-16 text-white" />;
              </div>;

              <div className="p-6">;
                <div className="flex items-center gap-2 mb-3">;
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">;
                    {project.area}
                  </span>;
                  <div>Broken JSX</div>
}`}>;
                    {project.status}
                  </span>;
                </div>;

                <h2 className="text-2xl font-bold text-gray-900 mb-3">;
                  {project.title}
                </h2>;

                <p className="text-gray-600 mb-6">;
                  {project.description}
                </p>;

                <div className="grid grid-cols-2 gap-4 mb-6">;
                  <div className="text-center">;
                    <div className="text-lg font-bold text-gray-900">{project.funding}</div>;
                    <div className="text-sm text-gray-500">Funding</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-lg font-bold text-gray-900">{project.duration}</div>;
                    <div className="text-sm text-gray-500">Duration</div>;
                  </div>;
                </div>;

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>;
                    <ul className="space-y-1">;
                      {};
                        <li key={index} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;

                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h4>;
                    <ul className="space-y-1">;
                      {};
                        <li key={index} className="flex items-center text-sm text-gray-600">;
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />;
                          {outcome}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;

                <div className="flex items-center justify-between">;
                  <div className="flex items-center text-sm text-gray-500">;
                    <Users className="h-4 w-4 mr-1" />;
                    {project.team} team members;
                  </div>;

                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">;
                    Learn More;
                    <ArrowRight className="ml-2 h-4 w-4" />;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </div>;

        {};
}}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium">;
              Clear filters;
            </button>;
          </div>;
        )}
      </div>;
    </div>;
  )}
